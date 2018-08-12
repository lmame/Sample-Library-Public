/*
 * Copyright (c) 2001-2015 BMC Software, Inc. All rights reserved. This software is the confidential
 * and proprietary information of BMC Software, Inc ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in accordance with the terms of the
 * license agreement between you and BMC Software, Inc.
 */
package com.example.uiautomation.sample.steps;

import org.openqa.selenium.WebDriver;
import com.bmc.rx.test.framework.BaseUITestGiven;
import com.tngtech.jgiven.annotation.ProvidedScenarioState;
import com.tngtech.jgiven.annotation.Quoted;
import com.tngtech.jgiven.annotation.ScenarioState.Resolution;

public class TestUIGivenState extends BaseUITestGiven<TestUIGivenState>{
    
	public TestUIGivenState login_as_$(@Quoted String tenantAdmin,@Quoted String adminPassword) {
		
		// Calling the UI Framework login method.
		login(tenantAdmin, adminPassword);

		return self();
	}
}
