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
import com.revature.entity.Maps;

@RestController
public class MapsController {

	@Autowired
	MapsDao dao;

	@GetMapping("/api/maps")
	public List<Maps> getAll() {
		return dao.findAll();
	}
	
	@GetMapping("/api/maps/")
	public Maps findByMapname(@RequestParam("name") String mapname) {
		return dao.findByMapname(mapname);
	}
	
	@GetMapping("/api/maps/status/{status}")
	public List<Maps> getByStatus(@PathVariable("status") String status){
		return  dao.findByStatus(status);
	}
	
	// TODO put user name into; replace user path variable with static 'me'
	@GetMapping("/api/maps/user/{user}")
	public List<Maps> getBySubmitter(@PathVariable("user") String user){
		return dao.findBySubmitter(user);
	}
	
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
		dao.save(adder);
		return adder;
	}

}
