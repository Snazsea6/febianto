package com.suify.report;

import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.HashMap;
import java.util.Map;

public class ReportGenerator {

    // Ambil koneksi JDBC MySQL (sama seperti di hibernate.cfg.xml)
    public static Connection getConnection() throws Exception {
        String url = "jdbc:mysql://localhost:3306/suifydb?useSSL=false&serverTimezone=UTC";
        String user = "root";
        String pass = ""; // isi jika ada password
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(url, user, pass);
    }

    public static void main(String[] args) {
        try (Connection conn = getConnection()) {
            // 1. Load JRXML dari resources
            InputStream jrxml = ReportGenerator.class.getResourceAsStream("/reports/report_playlists.jrxml");
            if (jrxml == null) {
                System.err.println("JRXML not found in resources/reports/");
                return;
            }

            // 2. Compile JRXML menjadi JasperReport
            JasperReport jasperReport = JasperCompileManager.compileReport(jrxml);

            // 3. Parameters (jika ada)
            Map<String, Object> params = new HashMap<>();
            params.put("ReportTitle", "Suify - Playlists Report");

            // 4. Fill report dengan data dari connection
            JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, params, conn);

            // 5. Export ke PDF
            String outPdf = "suify_playlists_report.pdf";
            JRPdfExporter exporter = new JRPdfExporter();
            exporter.setExporterInput(new SimpleExporterInput(jasperPrint));
            exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(outPdf));
            exporter.exportReport();

            System.out.println("Report generated: " + outPdf);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
