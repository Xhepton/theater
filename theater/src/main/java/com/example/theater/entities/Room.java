package com.example.theater.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.Set;


@Entity
public class Room {

    @Id
    @Column(nullable = false, updatable = false)
    private String roomName;

    @Column(nullable = false)
    private Integer colCount;

    @Column(nullable = false)
    private Integer rowCount;

    @JsonManagedReference
    @OneToMany(mappedBy = "roomRoomName")
    private Set<Screening> roomRoomNameScreenings;

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(final String roomName) {
        this.roomName = roomName;
    }

    public Integer getColCount() {
        return colCount;
    }

    public void setColCount(final Integer colCount) {
        this.colCount = colCount;
    }

    public Integer getRowCount() {
        return rowCount;
    }

    public void setRowCount(final Integer rowCount) {
        this.rowCount = rowCount;
    }

    public Set<Screening> getRoomRoomNameScreenings() {
        return roomRoomNameScreenings;
    }

    public void setRoomRoomNameScreenings(final Set<Screening> roomRoomNameScreenings) {
        this.roomRoomNameScreenings = roomRoomNameScreenings;
    }

}
