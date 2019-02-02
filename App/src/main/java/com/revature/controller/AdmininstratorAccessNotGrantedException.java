package com.revature.controller;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(code = HttpStatus.FORBIDDEN, reason = "Admin Access Not Granted")
public class AdmininstratorAccessNotGrantedException extends Exception {
	private static final long serialVersionUID = 1L;

	@Override
	public String getMessage() {
		return "Admin Access Not Granted";
	}
	
}
