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
import com.revature.exception.AdmininstratorAccessNotGrantedException;

@RestController
public class MapUsersController {

	@Autowired
	MapUsersDao dao;
	
	@Autowired
	private MapUsers mapUser;

	@GetMapping("/api/users")
	public List<MapUsers> getAll() throws Exception {
		// TODO throw an error if not admin
		if (!mapUser.isInvalidated() &&
				"admin".equalsIgnoreCase(mapUser.getAdmin()))
			return dao.findAll();
		else
			throw new AdmininstratorAccessNotGrantedException();
	}
	
	@PostMapping("/api/users/search")
	public MapUsers findByUsername(
			@RequestBody
			@Valid String username) {
		return dao.findByUsername(username);
	}
	
	// TODO create session data upon login
	@PostMapping("/login")
	public MapUsers login(
			@RequestBody
			@Valid 
			UserLogin userlogin)
	{
		MapUsers temp = findByUsername(userlogin.getUsername());
		if (temp != null && 
				temp.getPassword().equals(userlogin.getPassword())){
			mapUser.register(temp);
			System.out.println("MapUser: " + String.valueOf(mapUser));
			temp.setPassword(null);
			System.out.println(temp);
		} else {
			if (temp != null)
				temp.invalidate();
		}
		return temp;
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
		adder.setAdmin("user");
		
		dao.save(adder);
		return adder;
	}
	
	// TODO create session data upon new user
	@PostMapping("/api/users/register")
	public MapUsers register (
			@RequestBody
			@Valid
			MapUsers adder, Errors errors) {
		
		MapUsers added = add(adder, errors);
		if(added != null) {
			// TODO then create session
			mapUser.register(added);
			System.out.println("MapUser: " + String.valueOf(mapUser));
		}
		return adder;
	}

	// TODO kill the session data
	@GetMapping("/logout")
	public String logout()
			{
		mapUser.invalidate();
		System.out.println("MapUser: " + String.valueOf(mapUser));
		return "logged out";
	}
}