package com.revature.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.Table;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import com.revature.dao.MapUsersDao;
import com.revature.entity.MapUsers;

@RestController
public class MapUsersController {

	@Autowired
	MapUsersDao dao;

	@GetMapping("/users")
	public List<MapUsers> getAll() {
		return dao.findAll();
	}
	
	@GetMapping("/users/search")
	public MapUsers findByUsername(@RequestParam ("Username") String username) {
		return dao.findByUsername(username);
	}
	
	@PostMapping("/users/add")
	public MapUsers add(
			@RequestBody
			@Valid
			MapUsers adder, Errors errors)
			{
		if(errors.hasErrors()) {
			System.out.println(errors);
			System.out.println(adder.toString());
			return null;
		}
		adder.setJoindate(new Date());
		
		System.out.println(adder.getJoindate());
		dao.save(adder);
		return adder;
	}
	
	
	

}
