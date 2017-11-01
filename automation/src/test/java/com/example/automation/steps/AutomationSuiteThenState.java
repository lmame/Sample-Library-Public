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
import com.tngtech.jgiven.annotation.ScenarioState.Resolution;
import com.tngtech.jgiven.annotation.Quoted;

/**
 * Then class.
 * Usually the Then verify the actions from the When.
 */
public class AutomationSuiteThenState extends Stage<AutomationSuiteThenState> {
    @ExpectedScenarioState(resolution = Resolution.NAME)
    TestServer serverREST;

    /**
     * Dummy company test method
     *
     * @param userCompany (String)    Company to test
     * @return self()
     * @throws Exception
     */
    public AutomationSuiteThenState user_has_created_company(@Quoted String userCompany) throws Exception {
        // A test on the company can be run here.
        return self();
    }

}