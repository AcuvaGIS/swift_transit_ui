import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@core/components";
import { Alert } from '../index';
import { PlanTrip } from '../index';
import { Directions } from '../index';
import { MapRoutes } from '../index';

import { Menu } from "lucide-react";

const PanelTabs = [
    {
        tabName: 'DIRECTIONS',
        component: <Directions />
    },
    {
        tabName: 'ROUTES',
        component: <MapRoutes />
    },
    {
        tabName: 'PLAN TRIP',
        component: <PlanTrip />
    },
    {
        tabName: 'ALERTS',
        component: <Alert />
    }
]

const _TabsList = ['DIRECTIONS', 'ROUTES', 'PLAN TRIP', 'ALERTS']

export function SidePanel() {
    const [activeTab, setActiveTab] = useState('DIRECTIONS');

    const changeTab = (tabName: any) => {
        setActiveTab(tabName);
    };

    return (
        <div className="fixed h-auto md:h-screen w-full md:w-1/4 bg-slate-500 text-white bg-opacity-90 z-10">
            <div className="">
                <Menu size={32} />
            </div>
            <div className="p-4">
                <Tabs defaultValue={activeTab} className="space-y-2">
                    <TabsList className="flex justify-between items-center flex-wrap mb-10">
                        {
                            _TabsList.map((tabList) => (
                                <div>
                                    <TabsTrigger key={tabList} value={tabList} onClick={() => changeTab(tabList)} className={`w-full px-6 py-2 rounded ${activeTab === tabList ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'}`}>
                                        {tabList}
                                    </TabsTrigger>
                                </div>
                            ))
                        }
                    </TabsList>

                    {
                        PanelTabs.map((PanelTabContent) => (
                            <TabsContent value={PanelTabContent.tabName}>
                                {PanelTabContent.component}
                            </TabsContent>
                        ))
                    }
                </Tabs>
            </div>
        </div>
    );
}
