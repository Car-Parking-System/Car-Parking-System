package com.parking.dtos;

import java.time.LocalDate;

public class AreasCheckDTO {

	private int showid;
	private LocalDate date;
	
	public int getShowid() {
		return showid;
	}
	public void setShowid(int showid) {
		this.showid = showid;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
}
