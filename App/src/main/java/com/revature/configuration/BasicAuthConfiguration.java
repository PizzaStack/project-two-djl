package com.revature.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class BasicAuthConfiguration extends WebSecurityConfigurerAdapter {	
	 @Autowired
    public void configure(AuthenticationManagerBuilder auth) 
      throws Exception {
//		 https://stackoverflow.com/questions/49122867/spring-boot-2-0-0-oauth2?rq=1
//		 PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
//        String encoded = encoder.encode("password");
		 
        auth.inMemoryAuthentication();
//        .withUser("user")
//          .password(encoded).roles("USER");
    }

	 @Override
	 protected void configure(HttpSecurity http) throws Exception {
//	    http
//	      .csrf().disable()
//	      .authorizeRequests()
//          .antMatchers("/login").permitAll() // Everyone can log in
//          .antMatchers("/").permitAll() // Everyone can view the home page
//          .anyRequest().authenticated() // Authenticated users can make any Http request
//	      .and()
//	      .httpBasic();
	    http
	    	.csrf().disable()
	    	.authorizeRequests()
	    	.anyRequest().permitAll()
	    	.and()
	    	.httpBasic();
	}
}