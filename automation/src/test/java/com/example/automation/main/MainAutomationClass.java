/*
 * Copyright (c) 2001-2015 BMC Software, Inc. All rights reserved. This software is the confidential
 * and proprietary information of BMC Software, Inc ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in accordance with the terms of the
 * license agreement between you and BMC Software, Inc.
 */
package com.example.automation.main;

import java.util.ArrayList;
import java.util.List;
import org.testng.TestListenerAdapter;
import org.testng.TestNG;

/**
 * Main class.
 * This class will load the file testng.list
 * which will list the automation classes to run.
 */
public class MainAutomationClass {

    /**
     * Main entry point.
     *
     * @param args Arguments (please refer to documentation).
     */
	public static void main(String[] args) {
		TestListenerAdapter tla = new TestListenerAdapter();
		TestNG testng = new TestNG();
		List<String> suites = new ArrayList<String>();
		suites.add("testng.list");
		testng.setTestSuites(suites);
		testng.run();
	}
	
}
