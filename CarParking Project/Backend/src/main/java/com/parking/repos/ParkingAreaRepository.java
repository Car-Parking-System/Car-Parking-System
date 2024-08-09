package com.parking.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parking.models.ParkingArea;

@Repository
public interface ParkingAreaRepository extends JpaRepository<ParkingArea, Integer> {

}
