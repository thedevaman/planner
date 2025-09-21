import React, { useEffect, useState } from "react";
import 'animate.css';
import { Badge, Button, Card, DatePicker, Form, Input, Modal, Select, Tag } from "antd";
import { Plus } from "lucide-react";
import '@ant-design/v5-patch-for-react-19';
import { usePlanner } from "./store/usePlanner";

const App  = () =>{

  const [form] = Form.useForm()
  const [open,setOpen] = useState(false)
  const [time,setTime] = useState(new Date().toLocaleTimeString())
  const {tasks,addTasks} = usePlanner()

  const createTask= (value)=>{
    value.status = "pending"
    addTasks(value)
    handleClose()
   
  }

  const handleClose = ()=>{
    setOpen(false)
    form.resetFields()

  }

  useEffect(()=>{
  const interval = setInterval(()=>{
    setTime(new Date().toLocaleTimeString())
  },1000)
  return()=>{
    clearInterval(interval)
  }
  },[])

  return(
    <div className="bg-gray-200 h-screen overflow-hidden">
      <nav className="bg-gradient-to-r from-rose-500 via-slate-800 to slate-900 h-[60px] fixed top-0 left-0 w-full flex justify-between items-center px-8 text-white">
        <div className="flex items-center">
          <button className="w-10 h-10 bg-[radial-gradient(circle_at_center,_#00c6ff_0%,_#0072ff_100%)] rounded-full font-bold text-white">PL</button>
        <h1 className="text-2xl font-bold px-1">anner</h1>
        </div>
        <div className="flex gap-5 items-center">
         
        <h1 className="text-2xl font-bold lg:block hidden">{time}</h1>
         <DatePicker className="!py-1.5" />
         <button onClick={()=>setOpen(true)} className="focus:shadow-lg hover:scale-105 transform-transition duration-300 items-center text-sm py-2 px-3 rounded bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 text-white flex gap-1 font-medium">
              <Plus className="w-4 h-4"/>
              Add Task
            </button>
        </div>

      </nav>
      <section className="fixed top-[60px] left-0 h-[calc(100%-120px)] w-full overflow-x-auto overflow-y-visible grid lg:grid-cols-3 gap-8 p-8">
    
      <div className="lg:h-full lg:min-h-0 h-[300px]">
        <Badge.Ribbon text="Highest" 
        className="!bg-gradient-to-b !from-rose-600 !via-pink-600 !to-rose-500 !font-medium !z-[20000]" />

          <div className="bg-white rounded-lg h-full min-h-0 overflow-auto p-6 space-y-8">
            
           
            <div className="flex flex-col gap-8">
              {
                tasks.filter((item)=>item.priority === "highest").map((item,index)=>(
                  <Card key={index} hoverable>
                  <Card.Meta
                  title={item.title}
                  description={item.description}
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                    <Tag className="!capitalize">{item.status}</Tag>
                    <Tag className="!bg-rose-500 !border-rose-500 !text-white">Delete</Tag>
                    </div>
                    
                    <Select size="small" placeholder="Change Status">
                      <Select.Option value="pending">Pending</Select.Option>
                      <Select.Option value="inprogress">Inprogress</Select.Option>
                      <Select.Option value="completed">Completed</Select.Option>
                    </Select>
                  </div>
                </Card>
                ))
              }
              
              
            </div>

          </div>
      </div>

       <div className="lg:h-full lg:min-h-0 h-[300px]">
        <Badge.Ribbon text="Medium" 
        className="!bg-gradient-to-b !from-indigo-600 !via-blue-600 !to-indigo-500 !font-medium !z-[20000]" />

           <div className="bg-white rounded-lg h-full min-h-0 overflow-auto p-6 space-y-8">
            
            
            <div className="flex flex-col gap-8">

                {
                tasks.filter((item)=>item.priority === "medium").map((item,index)=>(
                  <Card key={index} hoverable>
                  <Card.Meta
                  title={item.title}
                  description={item.description}
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                    <Tag className="!capitalize">{item.status}</Tag>
                    <Tag className="!bg-rose-500 !border-rose-500 !text-white">Delete</Tag>
                    </div>
                    
                    <Select size="small" placeholder="Change Status">
                      <Select.Option value="pending">Pending</Select.Option>
                      <Select.Option value="inprogress">Inprogress</Select.Option>
                      <Select.Option value="completed">Completed</Select.Option>
                    </Select>
                  </div>
                </Card>
                ))
                }


              
              
            </div>

          </div>
      </div>

       <div className="lg:h-full lg:min-h-0 h-[300px]">
        <Badge.Ribbon text="Lowest" 
        className="!bg-gradient-to-b !from-amber-600 !via-orange-600 !to-amber-500 !font-medium !z-[20000]" />

           <div className="bg-white rounded-lg h-full min-h-0 overflow-auto p-6 space-y-8">
            
           
            <div className="flex flex-col gap-8">
               {
                tasks.filter((item)=>item.priority === "lowest").map((item,index)=>(
                  <Card key={index} hoverable>
                  <Card.Meta
                  title={item.title}
                  description={item.description}
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                    <Tag className="!capitalize">{item.status}</Tag>
                    <Tag className="!bg-rose-500 !border-rose-500 !text-white">Delete</Tag>
                    </div>
                    
                    <Select size="small" placeholder="Change Status">
                      <Select.Option value="pending">Pending</Select.Option>
                      <Select.Option value="inprogress">Inprogress</Select.Option>
                      <Select.Option value="completed">Completed</Select.Option>
                    </Select>
                  </div>
                </Card>
                ))
                }
              
              
            </div>

          </div>
      </div>
       
       
      </section>

      <footer className="bg-gradient-to-l from-rose-500 via-slate-800 to slate-900 text-white h-[60px] fixed bottom-0 left-0 w-full flex items-center justify-between px-8">
         <h1 className="text-2xl font-bold">Total Tasks - 22</h1>
         <a href="#" className="hover:underline"> Devaman</a>
      </footer>
      <Modal open={open} footer={null} onCancel={handleClose} maskClosable={false}>
        <h1 className="text-lg font-medium mb-3">New Task</h1>
        <Form onFinish={createTask} form={form}>
          <Form.Item
          name="title"
          rules={[{required:true}]}
        
          >
            <Input
            placeholder="Task Name" 
            size="large"
            />
          </Form.Item>

           <Form.Item
          name="description"
          rules={[{required:true}]}
        
          >
            <Input.TextArea
            placeholder="Task Description goes here"
            rows={5}
            />
          </Form.Item>

            <Form.Item
          name="priority"
          rules={[{required:true}]}
          >
           <Select size="large" placeholder="Choose Priority">
           <Select.Option value="highest">Highest</Select.Option>
           <Select.Option value="medium">Medium</Select.Option>
           <Select.Option value="lowest">Lowest</Select.Option>

           </Select>

          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary" size="large">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )

}

export default App