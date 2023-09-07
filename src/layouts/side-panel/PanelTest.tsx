import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@core/components";

function PanelTest() {
    const [activeTab, setActiveTab] = useState('DIRECTIONS');

    const changeTab = (tabName: any) => {
        setActiveTab(tabName);
    };

    return (
        <div className="fixed h-screen w-1/4 bg-slate-500 text-white bg-opacity-90">
            <div className="p-4">
                <h1 className="text-xl font-bold mb-4">Navigation</h1>
                <Tabs defaultValue={activeTab} className="space-y-2">
                    <TabsList className="flex justify-between items-center flex-wrap mb-10">
                        <div>
                            <TabsTrigger value="DIRECTIONS" onClick={() => changeTab('DIRECTIONS')} className={`w-full px-6 py-2 rounded ${activeTab === 'DIRECTIONS' ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'}`}>
                                DIRECTIONS
                            </TabsTrigger>
                        </div>
                        <div>
                            <TabsTrigger value="LINES" onClick={() => changeTab('LINES')} className={`w-full px-6 py-2 rounded ${activeTab === 'ROUTES' ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'}`}>
                                ROUTES
                            </TabsTrigger>
                        </div>

                        <div>
                            <TabsTrigger value="LINES" onClick={() => changeTab('PLANNER')} className={`w-full px-6 py-2 rounded ${activeTab === 'PLANNER' ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'}`}>
                                PLANNER
                            </TabsTrigger>
                        </div>
                        <div>
                            <TabsTrigger value="ALERTS" onClick={() => changeTab('ALERTS')} className={`w-full px-6 py-2 rounded ${activeTab === 'ALERTS' ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'}`}>
                                ALERTS
                            </TabsTrigger>
                        </div>
                    </TabsList>
                    <TabsContent value="DIRECTIONS" className='mt-5'>
                        <p>Content for DIRECTIONS tab</p>
                    </TabsContent>
                    <TabsContent value="LINES" className='mt-5'>
                        <p>Content for LINES tab</p>
                    </TabsContent>
                    <TabsContent value="ALERTS" className='mt-5'>
                        <p>Content for ALERTS tab</p>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

export default PanelTest;
