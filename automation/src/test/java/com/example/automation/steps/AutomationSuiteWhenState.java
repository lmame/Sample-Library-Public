/*
 * Copyright (c) 2001-2015 BMC Software, Inc. All rights reserved. This software is the confidential
 * and proprietary information of BMC Software, Inc ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in accordance with the terms of the
 * license agreement between you and BMC Software, Inc.
 */
package com.example.automation.steps;

import com.bmc.rx.test.framework.connection.TestServer;
import com.tngtech.jgiven.Stage;
import com.tngtech.jgiven.annotation.ExpectedScenarioState;
import com.tngtech.jgiven.annotation.Quoted;
import com.tngtech.jgiven.annotation.ScenarioState.Resolution;

/**
 * When class.
 * Usually this class contains the actions, for example creation og record instances.
 */
public class AutomationSuiteWhenState extends Stage<AutomationSuiteWhenState> {
    @ExpectedScenarioState(resolution = Resolution.NAME)
    TestServer serverREST;

    /**
     * Dummy Creation company method
     *
     * @param userCompany (String)    Company to Create
     * @return self()
     * @throws Exception
     */
    public AutomationSuiteWhenState user_creates_company(@Quoted String userCompany) throws Exception {
        // User creates a company
        return self();
    }

}