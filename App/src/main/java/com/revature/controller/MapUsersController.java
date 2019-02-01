package com.revature.controller;

import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.dao.MapUsersDao;
import com.revature.entity.MapUsers;
import com.revature.entity.UserLogin;

@RestController
public class MapUsersController {

	@Autowired
	MapUsersDao dao;

	@GetMapping("/api/users")
	public List<MapUsers> getAll() {
		// TODO throw an error if not admin
		return dao.findAll();
	}
	
	@GetMapping("/api/users/search")
	public MapUsers findByUsername(
			@RequestBody
			@Valid String username) {
		return dao.findByUsername(username);
	}
	
	// TODO create session data upon login
	@GetMapping("/login")
	public Boolean login(
			@RequestBody
			@Valid 
			UserLogin userlogin)
	{
		MapUsers temp = findByUsername(userlogin.getUsername());
		if (temp.getPassword().equals(userlogin.getPassword())){
			return true;
		} else {
			return false;
		}
	}

	@PostMapping("/api/users/update")
	public MapUsers add(
			@RequestBody
			@Valid
			MapUsers adder, Errors errors)
			{
		if(errors.hasErrors()) {
			return null;
		}
		adder.setJoindate(new Date());
		
		dao.save(adder);
		return adder;
	}
	
	// TODO create session data upon new user
	@PostMapping("/registration")
	public MapUsers register (
			@RequestBody
			@Valid
			MapUsers adder, Errors errors) {
		
		MapUsers added = add(adder, errors);
		if(added != null);
			// TODO then create session
		return adder;
	}

	// TODO kill the session data
	@GetMapping("/logout")
	public String logout()
			{
		return "This is just a mock logout.";
	}
}
