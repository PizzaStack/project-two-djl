package com.revature.controller;

import java.io.IOException;
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
import com.revature.entity.Maps;

@RestController
public class MapsController {

	@Autowired
	MapsDao dao;

	@GetMapping("/maps")
	public List<Maps> getAll() {
		return dao.findAll();
	}
	
	

}
