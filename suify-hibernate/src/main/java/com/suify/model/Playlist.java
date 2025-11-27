package com.suify.model;

import jakarta.persistence.*;

@Entity
@Table(name = "playlists")
public class Playlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "title", nullable = false, length = 100)
    private String title;

    @Column(name = "artist", length = 100)
    private String artist;

    public Playlist() { }

    public Playlist(String title, String artist) {
        this.title = title;
        this.artist = artist;
    }

    public Integer getId() { return id; }
    public String getTitle() { return title; }
    public String getArtist() { return artist; }

    public void setTitle(String title) { this.title = title; }
    public void setArtist(String artist) { this.artist = artist; }

    @Override
    public String toString() {
        return id + ": " + title + " - " + artist;
    }
}