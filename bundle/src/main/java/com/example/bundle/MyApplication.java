/*
 * Copyright (c) 2001-2015 BMC Software, Inc. All rights reserved. This software is the confidential
 * and proprietary information of BMC Software, Inc ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in accordance with the terms of the
 * license agreement between you and BMC Software, Inc.
 */

package com.example.bundle;

import com.bmc.arsys.rx.services.common.RxBundle;
import com.bmc.arsys.rx.services.common.domain.WebResourceDefinition;
import com.example.command.TestCommand;
import com.example.command.SimpleCommand;
import com.example.rest.SimpleRest;
import com.example.service.SimpleService;

/**
 * Rx Web Activator class.
 */
public class MyApplication extends RxBundle {

    /* (non-Javadoc)
     * @see com.bmc.arsys.rx.business.common.RxBundle#register()
     */
    @Override
    protected void register() {
        //
        // TODO: Register static web resources and framework extensions.
        //
        // registerService(new MyService());
        //
		
		// Registering Command classes
    	registerClass(TestCommand.class);
    	registerClass(SimpleCommand.class);

        // Registering Custom REST calls.
        registerRestfulResource(new SimpleRest());
        
        // Registering Services.
        registerService(new SimpleService());

        registerStaticWebResource(String.format("/%s", getId()), "/webapp");
    }
}
