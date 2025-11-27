package com.suify;

import com.suify.model.Playlist;
import com.suify.util.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class App {
    public static void main(String[] args) {
        System.out.println("🎵 Starting Suify Hibernate demo...");

        addPlaylist("Shape of You", "Ed Sheeran");
        addPlaylist("Let It Be", "The Beatles");

        listPlaylists();

        deletePlaylist(1);

        HibernateUtil.shutdown();
    }

    public static void addPlaylist(String title, String artist) {
        Transaction tx = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            tx = session.beginTransaction();
            Playlist p = new Playlist(title, artist);
            session.persist(p); // ORM tanpa query
            tx.commit();
            System.out.println("✅ Added: " + p);
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        }
    }

    public static void listPlaylists() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            List<Playlist> songs = session.createQuery("from Playlist", Playlist.class).list();
            System.out.println("\n🎧 Playlist Data:");
            for (Playlist p : songs) System.out.println(p);
        }
    }

    public static void deletePlaylist(int id) {
        Transaction tx = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            tx = session.beginTransaction();
            Playlist p = session.get(Playlist.class, id);
            if (p != null) {
                session.remove(p);
                System.out.println("🗑️ Deleted: " + p);
            } else {
                System.out.println("⚠️ Playlist id " + id + " not found.");
            }
            tx.commit();
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        }
    }
}