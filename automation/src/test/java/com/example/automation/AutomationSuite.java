/*
 * Copyright (c) 2001-2015 BMC Software, Inc. All rights reserved. This software is the confidential
 * and proprietary information of BMC Software, Inc ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in accordance with the terms of the
 * license agreement between you and BMC Software, Inc.
 */
package com.example.automation;

import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import com.bmc.rx.test.framework.BaseTest;
import com.bmc.rx.test.framework.annotation.Bug;
import com.bmc.rx.test.framework.annotation.GUID;
import com.bmc.rx.test.framework.annotation.Groups;
import com.example.automation.steps.AutomationSuiteGivenState;
import com.example.automation.steps.AutomationSuiteThenState;
import com.example.automation.steps.AutomationSuiteWhenState;

/**
 * Dummy use case. This test case does not actually logs in an user
 * or creates a company but is a placeholder and an example.
 * For a full working example please check the "TaskManager" Class.
 * <p>
 * This class uses methods from the "Given", "Then" and "When" classes.
 * The goal of this class is to describe your tests in steps as you would
 * traverse you process, logically. For example:
 * Given
 * -> I login,
 * When
 * -> I create a Task
 * -> I assign the Task
 * Then
 * -> I expect to have one Task created
 * -> I expect the Task to be assigned
 * <p>
 * You can have as many "Given", "When" and "Then" as necessary though usually
 * only one "Given" is used.
 */
public class AutomationSuite extends BaseTest<AutomationSuiteGivenState, AutomationSuiteWhenState, AutomationSuiteThenState> {
    @BeforeClass(alwaysRun = true)
    public void beforeClass2() {
    }

    /**
     * Dummy use case. This test case does not actually logs in an user
     * or creates a company but is a placeholder and an example.
     * For a full working example please check the "TaskManager" Class.
     *
     * @throws Exception Exception
     */
    @Test(groups = Groups.CATEGORY_SANITY)
    @GUID("D15A2DD9-91FE-4CCF-BD86-249E742C3369")
    @Bug("")
    public void AutomationSample() throws Exception {
        String userName = "Allbrook";
        String userPassword = "Allbrook";
        String userCompany = "Calbro Services";

        given()
                .user_login(userName, userPassword);

        when()
                .user_creates_company(userCompany);

        then()
                .user_has_created_company(userCompany);
    }

}
