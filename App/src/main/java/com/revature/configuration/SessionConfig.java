package com.revature.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.web.context.WebApplicationContext;

import com.revature.entity.MapUsers;

// https://www.baeldung.com/spring-bean-scopes
@Configuration
public class SessionConfig {
	@Bean
    @Scope(
        value = WebApplicationContext.SCOPE_SESSION, 
        proxyMode = ScopedProxyMode.TARGET_CLASS)
	public MapUsers MapsUserSession() {
		// TODO clean up
		System.out.println("Creating a session bean");
		return new MapUsers();
	}
}
