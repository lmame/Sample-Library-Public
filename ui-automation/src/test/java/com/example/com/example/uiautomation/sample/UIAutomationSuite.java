/*
 * Copyright (c) 2001-2015 BMC Software, Inc. All rights reserved. This software is the confidential
 * and proprietary information of BMC Software, Inc ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in accordance with the terms of the
 * license agreement between you and BMC Software, Inc.
 */
package com.example.uiautomation.sample;

import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import com.bmc.rx.test.framework.UIBaseTest;
import com.bmc.rx.test.framework.annotation.Bug;
import com.bmc.rx.test.framework.annotation.GUID;
import com.bmc.rx.test.framework.annotation.Groups;
// Steps used for Given, When and Then
import  com.example.uiautomation.sample.steps.TestUIGivenState;
import  com.example.uiautomation.sample.steps.TestUIThenState;
import  com.example.uiautomation.sample.steps.TestUIWhenState;

/**
 * Dummy use case. This test calls the login page from Task Manager
 * and just does a login operation.
 * For a full working example please check the "TaskManager" Class.
 * <p>
 * This class uses methods from the "Given", "Then" and "When" classes.
 * The goal of this class is to describe your tests in steps as you would
 * traverse you process, logically. For example:
 * Given
 * -> I access an application login page,
 * When
 * -> I Login
 * Then
 * -> I expect to be logged in
 * <p>
 * You can have as many "Given", "When" and "Then" as necessary though usually
 * only one "Given" is used.
 */
public class UIAutomationSuite extends UIBaseTest<TestUIGivenState, TestUIWhenState, TestUIThenState>{
    // A valid username and password to access Task Manager.
    private final String userName = "userAccount";
    private final String userPassword = "passwordAccount";
    // Application (bundle) we want to login to.
    // Here Task Manager.
    private final String bundleName = "com.example.samplelibrary";
        
	@BeforeClass
	public void init(){
		super.beforeClass();
	}
	
	/**
	 * Code executed before each test.
	 */
	@BeforeMethod
	public void setup(){
		// Here we set the application we want to connect to
		// This method builds the home url using the server and port
		// defined in properties.config as well as the bundleName.
		setHomeURL(bundleName);
	}
	
    /**
     * This test will simply launch the Task Manager login page
     * And will do a login operation.
     */
	@Test(groups = Groups.CATEGORY_SANITY)
    @GUID("D15A2DD9-91FE-4CCF-BD86-249E742C3369")
    @Bug("")
	public void openShell(){
		// Login operation.
		given()
		.login_as_$(userName,userPassword);
	}
}
