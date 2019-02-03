package com.revature.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Type;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.revature.entity.json.ByteArraytoString;
import com.revature.entity.json.StringtoByteArray;

@Entity
@Table(name = "maps")
public class Maps {

//	@Lob
//	@Column(name = "file")
//	@Type(type="org.hibernate.type.BinaryType")
//	@Type(type="org.hibernate.type.PrimitivebyteArrayBlobType")
	@Lob

	@Type(type = "org.hibernate.type.BinaryType")
	@JsonDeserialize(using = StringtoByteArray.class)
	@JsonSerialize(using = ByteArraytoString.class)
	private byte[] file;

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	@Lob
	@Type(type = "org.hibernate.type.BinaryType")
	@JsonDeserialize(using = StringtoByteArray.class)
	@JsonSerialize(using = ByteArraytoString.class)
	private byte[] image;

	public byte[] getFile() {
		return file;
	}

	public void setFile(byte[] file) {
		this.file = file;
	}

	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date uploaddate;

	public Date getUploaddate() {
		return uploaddate;
	}

	public void setUploaddate(Date uploaddate) {
		if (this.uploaddate != null)
			this.uploaddate = uploaddate;
	}

	@Id
	@NotNull
	private String mapname;

	@NotNull
	private String description;

	@NotNull
	private String submitter;

	@NotNull
	private String status;

	public String getMapname() {
		return mapname;
	}

	public void setMapname(String mapname) {
		this.mapname = mapname;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSubmitter() {
		return submitter;
	}

	public void setSubmitter(String submitter) {
		this.submitter = submitter;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Maps() {
		super();
		// registerColumnType( Types.BLOB, "bytea" );
	}
}