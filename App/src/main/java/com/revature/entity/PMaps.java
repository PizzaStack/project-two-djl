package com.revature.entity;

import java.util.Date;

import org.apache.commons.lang3.ArrayUtils;

public class PMaps {
	private String description, file, image, mapname, status, submitter;
	private Date uploaddate;
	
	public PMaps(Maps map) {
		this.description = map.getDescription();
		this.file = new String(ArrayUtils.toPrimitive(map.getFile()));
		this.image = new String(ArrayUtils.toPrimitive(map.getImage()));
		this.mapname = map.getMapname();
		this.status = map.getStatus();
		this.submitter = map.getSubmitter();
		this.uploaddate = map.getUploaddate();
	}
	
	public Maps getMap() {
		Maps r = new Maps();
		r.setDescription(description);
		r.setFile(ArrayUtils.toObject(file.getBytes()));
		r.setImage(ArrayUtils.toObject(image.getBytes()));
		r.setMapname(mapname);
		r.setStatus(status);
		r.setSubmitter(submitter);
		r.setUploaddate(uploaddate);
		return r;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getFile() {
		return file;
	}

	public void setFile(String file) {
		this.file = file;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getMapname() {
		return mapname;
	}

	public void setMapname(String mapname) {
		this.mapname = mapname;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getSubmitter() {
		return submitter;
	}

	public void setSubmitter(String submitter) {
		this.submitter = submitter;
	}

	public Date getUploaddate() {
		return uploaddate;
	}

	public void Date(Date uploaddate) {
		this.uploaddate = uploaddate;
	}
	
	
}
