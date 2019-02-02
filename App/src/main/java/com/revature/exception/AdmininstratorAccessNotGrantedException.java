package com.revature.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

// https://www.baeldung.com/spring-response-status
// https://www.baeldung.com/spring-boot-custom-error-page
@ResponseStatus(code = HttpStatus.FORBIDDEN, reason = "Admin Access Not Granted")
public class AdmininstratorAccessNotGrantedException extends Exception {
	private static final long serialVersionUID = 1L;

	@Override
	public String getMessage() {
		return "Admin Access Not Granted";
	}
	
}
