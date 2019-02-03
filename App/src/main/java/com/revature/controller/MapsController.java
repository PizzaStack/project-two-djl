package com.revature.controller;

import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.dao.MapsDao;
import com.revature.entity.MapUsers;
import com.revature.entity.Maps;

@RestController
public class MapsController {

	@Autowired
	MapsDao dao;
	
	@Autowired
	private MapUsers mapUser;

	@GetMapping("/api/maps")
	public List<Maps> getAll() {
		return dao.findAll();
	}
	
	@GetMapping("/api/maps/{name}")
	public Maps findByMapname(@PathVariable("name") String mapname) {
		return dao.findByMapname(mapname);
	}
	
	@GetMapping("/api/maps/status/{status}")
	public List<Maps> getByStatus(@PathVariable("status") String status){
		return  dao.findByStatus(status);
	}
	
	// TODO put user name into; replace user path variable with static 'me'
	@GetMapping("/api/maps/me")
	public List<Maps> getBySubmitter(){
		System.out.println("MapUser: " + String.valueOf(mapUser));
		return dao.findBySubmitter(!mapUser.isInvalidated() ? mapUser.getUsername() :
			null);
	}
	
//	@PostMapping("/api/maps/upload")
//	public @Valid Maps updateWithFile (
//			@RequestParam("")
//			Maps adder, Errors errors) {
//		return null;
//	}
	
	@PostMapping("/api/maps/add")
	public @Valid Maps add(
			@RequestBody
			@Valid
			Maps adder, Errors errors)
			{
		if(errors.hasErrors()) {
			return null;
		}
		adder.setUploaddate(new Date());
		
		dao.save(adder);
		return adder;
	}
	
	@PostMapping("/api/maps/approve")
	public @Valid Maps approve(
			@RequestBody
			@Valid
			String name, Errors errors) {
		
		Maps adder = dao.findByMapname(name);
		adder.setStatus("approved");
		System.out.println(adder.getStatus());
		System.out.println(adder.getMapname());
		dao.save(adder);
		return adder;
	}

}
