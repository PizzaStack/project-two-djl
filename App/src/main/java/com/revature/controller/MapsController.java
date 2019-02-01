package com.revature.controller;

import java.io.IOException;
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

import com.revature.dao.MapsDao;
import com.revature.entity.MapUsers;
import com.revature.entity.Maps;

@RestController
public class MapsController {

	@Autowired
	MapsDao dao;

	@GetMapping("/api/maps")
	public List<Maps> getAll() {
		return dao.findAll();
	}
	
	@GetMapping("/api/maps")
	public Maps findByMapname(@RequestParam("name") String mapname) {
		return dao.findByMapname(mapname);
	}
	
	@GetMapping("/maps/status/{status}")
	public List<Maps> getByStatus(@PathVariable("status") String status){
		return  dao.findByStatus(status);
	}
	
	@GetMapping("/maps/user/{user}")
	public List<Maps> getBySubmitter(@PathVariable("user") String user){
		return dao.findBySubmitter(user);
	}
	
	@PostMapping("/maps/add")
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
	
	@PostMapping("/maps/approve/")
	public @Valid Maps approve(
			@RequestBody
			@Valid
			Maps adder, Errors errors) {
		
		adder = dao.findByMapname(adder.getMapname());
		adder.setStatus("approved");
		dao.save(adder);
		return adder;
	}

}
