package com.parking.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parking.models.SeatType;

@Repository
public interface SeatTypeRepository extends JpaRepository<SeatType, Integer> {

}
