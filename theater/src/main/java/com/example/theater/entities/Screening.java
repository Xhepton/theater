package com.example.theater.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.time.OffsetDateTime;


@Entity
public class Screening {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer screeningId;

    @Column(nullable = false)
    private OffsetDateTime startTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "movie_title_id", nullable = false)
    private Movie movieTitle;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_room_name_id", nullable = false)
    private Room roomRoomName;

    public Integer getScreeningId() {
        return screeningId;
    }

    public void setScreeningId(final Integer screeningId) {
        this.screeningId = screeningId;
    }

    public OffsetDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(final OffsetDateTime startTime) {
        this.startTime = startTime;
    }

    public Movie getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(final Movie movieTitle) {
        this.movieTitle = movieTitle;
    }

    public Room getRoomRoomName() {
        return roomRoomName;
    }

    public void setRoomRoomName(final Room roomRoomName) {
        this.roomRoomName = roomRoomName;
    }

}
