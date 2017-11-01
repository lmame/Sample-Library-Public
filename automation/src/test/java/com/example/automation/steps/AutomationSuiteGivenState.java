/*
 * Copyright (c) 2001-2015 BMC Software, Inc. All rights reserved. This software is the confidential
 * and proprietary information of BMC Software, Inc ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in accordance with the terms of the
 * license agreement between you and BMC Software, Inc.
 */
package com.example.automation.steps;

import com.bmc.rx.test.framework.BaseTestGiven;
import com.bmc.rx.test.framework.connection.TestServer;
import com.bmc.rx.test.framework.util.AutoConfig;
import com.tngtech.jgiven.annotation.AfterScenario;
import com.tngtech.jgiven.annotation.BeforeScenario;
import com.tngtech.jgiven.annotation.BeforeStage;
import com.tngtech.jgiven.annotation.Hidden;
import com.tngtech.jgiven.annotation.ProvidedScenarioState;
import com.tngtech.jgiven.annotation.ScenarioState.Resolution;


/**
 * Given class.
 * Usually the Given class holds the conditions for your tests.
 * For example the login or getting information (number of records etc...).
 */
public class AutomationSuiteGivenState extends BaseTestGiven<AutomationSuiteGivenState> {
    @ProvidedScenarioState(resolution = Resolution.NAME)
    TestServer serverREST;

    /**
     * Executed before each scenario
     */
    @BeforeScenario
    protected void beforeScenario() {
        System.out.println("-------------------------------------------beforeScenario----------------------------------");
    }

    /**
     * Executed before each Stage
     */
    @BeforeStage
    protected void beforeStage() {
        System.out.println("-------------------------------------------beforeStage-------------------------------------");
    }

    /**
     * This method calls additional setup. Please refer to class TaskManager
     * for an example.
     *
     * @param server (TestServer)  server object created during login operation.
     */	
    protected void additionalSetup(TestServer server) {
        if (AutoConfig.getRunConfig().isImportTestData()) {
        }
    }

    /**
     * Executed after each scenario
     */
    @AfterScenario
    public void cleanup() {
        super.afterClass();
    }

    /**
     * Dummy login method
     *
     * @param userName     (String)    User name used for Login operation
     * @param userPassword (String)    Password used for Login operation
     * @return self()
     * @throws Exception
     */
    public AutomationSuiteGivenState user_login(@Hidden String userName, @Hidden String userPassword) throws Exception {
        // Login operation can be here.
        return self();
    }

}
