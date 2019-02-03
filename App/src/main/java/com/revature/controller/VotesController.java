package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.dao.VotesDao;
import com.revature.entity.Votes;

@RestController
public class VotesController {

	@Autowired
	VotesDao dao;

	@GetMapping("/votes")
	public List<Votes> getAll() {
		return dao.findAll();
	}
	
}
