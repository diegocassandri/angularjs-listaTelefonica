package com.mcanzian;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;

import com.mcanzian.listaTelefonica.ListaTelefonicaApplication;

import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = ListaTelefonicaApplication.class)
@WebAppConfiguration
public class ListaTelefonicaApplicationTests {

	@Test
	public void contextLoads() {
	}

}
