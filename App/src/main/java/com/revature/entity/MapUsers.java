
package com.revature.entity;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Transient;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table (name = "mapusers")
public class MapUsers{
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date joindate;
	
	@Id
	@NotNull
	private String username;
	
	@NotNull
	private String password;

	
	@NotNull
	private String email;
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@NotNull
	private String admin;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Date getJoindate() {
		return joindate;
	}

	public void setJoindate(Date joindate) {
		this.joindate = joindate;
	}

	public String getAdmin() {
		return admin;
	}

	public void setAdmin(String admin) {
		this.admin = admin;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Transient
	@Override
	public String toString() {
		return isInvalidated() ? "Invalidated" :
			"MapUsers [joindate=" + joindate + ", username=" + username + ", password=" + password + ", email="
				+ email + ", admin=" + admin + "]";
	}
	
	@Transient
	public boolean isInvalidated() {
		return username == null;
	}
	
	@Transient
	public void invalidate() {
		username = null;
	}
	
	@Transient
	public void register(MapUsers mapusers) {
		setAdmin(mapusers.getAdmin());
		setEmail(mapusers.getEmail());
		setJoindate(mapusers.getJoindate());
		setPassword(mapusers.getPassword());
		setUsername(mapusers.getUsername());
	}
}