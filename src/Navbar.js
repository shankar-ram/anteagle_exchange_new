
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Nav, NavDropdown ,ButtonGroup,ButtonToggle,ToggleButton,ToggleButtonGroup, TabPane,Table} from 'react-bootstrap';
import logo from  './FInalCryptologo.png'
import { Container } from 'react-dom';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { FormControl,InputLabel,FormHelperText,Select } from '@material-ui/core';
import Slider from "@material-ui/core/Slider";
import {Row,Col,Card,CardTitle,CardHeader,CardBody,Form,Label,Input,InputGroup,InputGroupAddon,DropdownMenu,DropdownToggle} from 'reactstrap'
import MenuItem from '@material-ui/core/MenuItem';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import {Tabs,TabList,Tab,TabPanel} from 'react-tabs'
import classNames from "classnames";
import { Dropdown } from 'bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
function App() {
  const types=["BUY","SELL"];
  const [activeB, setActiveB] =React.useState(true)
  const [activeE, setActiveE] =React.useState(true)
  const [buy,setBuy]=React.useState('Stop-limit')
  const [sell,setSell]=React.useState('Stop-limit')
  const [exit,setExit]=React.useState(false)
 
 

  return (
  <>
    
    <Navbar bg="light" expand="lg" style={{padding:"20px"}}>
    <img src={logo} style={{height:"70px",width:"70px"}}></img>{"   "}
       <Navbar.Brand href="#home" style={{fontFamily:"Strasua",marginLeft:"10px"}}>Anteagle Exchange</Navbar.Brand>
      <Navbar.Toggle />


      <Navbar.Collapse className="justify-content-center"  >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">Positions</Nav.Link>
          <Nav.Link href="#link">Portfolio</Nav.Link>
    
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end"  >
        <Button color="secondary">Report a Problem</Button>
      
       <Nav.Link onClick={()=>{
        document.body.classList.remove("white-content")
      }}><img src="https://img.icons8.com/ios-glyphs/24/000000/twitter--v2.png"/></Nav.Link>
       <Nav.Link onClick={()=>{
        document.body.classList.remove("white-content")
      }}><img src="https://img.icons8.com/ios-filled/24/000000/telegram-app.png"/></Nav.Link>
      <Nav.Link onClick={()=>{
        document.body.classList.remove("white-content")
      }}><img src="https://img.icons8.com/material-outlined/24/000000/settings--v3.png"/></Nav.Link>
      </Navbar.Collapse>
    
  </Navbar>

<div className="row" style={{paddingRight:"20px",marginLeft:"20px"}}>

 <div class="tabs" style={{width:"20%"}}>
      <Row >
      <Tabs > 
        <TabList >
          <Tab>Single Trade</Tab>
          <Tab>Full Trade</Tab>
        </TabList>
        <TabPanel>
        <ButtonGroup >
          <Button  size="lg"  className="bg-success"  style={{paddingRight:"2rem",paddingLeft:"2rem"}} onClick={()=>{
         setActiveB(true)
         
       }}>
        BUY
       </Button>
       
          <Button size="lg" className="bg-dark" style={{paddingRight:"2rem",paddingLeft:"2rem"}}  onClick={()=>{
            setActiveB(false)
         
           }}>
        SELL
       </Button>
       </ButtonGroup>
{/* 
       <ToggleButtonGroup type="checkbox" >
      <ToggleButton  size="lg" id="tbg-btn-1" value={1} onClick={()=>{
         setActiveB(true)
      }}>
        Option 1
      </ToggleButton>
      <ToggleButton size="lg"  id="tbg-btn-2" value={2} onClick={()=>{
         setActiveB(false)
      }}>
        Option 2
      </ToggleButton>
      </ToggleButtonGroup> */}
         
     
      {activeB?<>
        
        <Tabs>
          <TabList  style={{fontSize:"0.8rem"}}>
            <Tab>Limit</Tab>
            <Tab>Market</Tab>
            <Tab>
           
            <Select  style={{fontSize:"0.79rem"}} id="select"  value={buy}
          onChange={(e)=>{
            
            setBuy(e.target.value)
          }}>
              <MenuItem value={'Stop-limit'}>Stop-limit</MenuItem>
              <MenuItem value={'Stop-market'}>Stop-market</MenuItem>
            </Select>
            </Tab>
            
          </TabList>
          <TabPanel>
            
              
            <Form>
              <Label>Price</Label>
              <Input></Input>

           

              <Label>Amount</Label>
              <Input></Input>

              <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />

              <Label>Total</Label>
              <Input></Input>

              {/* <div>
     
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Price</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Amount</InputGroupAddon>
        <Input />
      </InputGroup>
    </div> */}

              <Button size="lg" className="bg-success" style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}}>Buy</Button>
            </Form>
            
          </TabPanel>
          
         
          <TabPanel>
          <Form>
              <Label>Price</Label>
              <Input></Input>

           

              <Label>Amount</Label>
              <Input></Input>

              <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />

              <Label>Total</Label>
              <Input></Input>

              <Button size="lg" className="bg-success" style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}}>Buy</Button>
            </Form>
          </TabPanel>
        </Tabs>
        
       
      </>:
      <Tabs>
          <TabList style={{fontSize:"0.8rem"}}>
            <Tab>Limit</Tab>
            <Tab>Market</Tab>
            <Tab>
            <Select  style={{fontSize:"0.79rem"}} id="select"  value={sell}
          onChange={(e)=>{
            
            setSell(e.target.value)
          }}>
              <MenuItem value={'Stop-limit'}>Stop-limit</MenuItem>
              <MenuItem value={'Stop-market'}>Stop-market</MenuItem>
              <MenuItem value={'Take-Profit-Limit'}>Take-Profit-Limit</MenuItem>
              <MenuItem value={'Take-Profit-Market'}>Take-Profit-Market</MenuItem>
            </Select>
           </Tab>
            
            
          </TabList>
          <TabPanel>
         
            <Form>
              <Label>Price</Label>
              <Input></Input>

           

              <Label>Amount</Label>
              <Input></Input>

              <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />

              <Label>Total</Label>
              <Input></Input>

              <Button size="lg"  className="bg-dark"  style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}}>Sell</Button>
            </Form>
          </TabPanel>
          <TabPanel>
          <Form>
              <Label>Price</Label>
              <Input></Input>

           

              <Label>Amount</Label>
              <Input></Input>

              <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />

              <Label>Total</Label>
              <Input></Input>

              <Button size="lg" className="bg-dark"  style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}}>Sell</Button>
            </Form>
          </TabPanel>
        </Tabs>
        }
       

       
        </TabPanel>
        <TabPanel>
            {!exit? 
                <> 
                <p style={{fontSize:"1.1rem",fontWeight:"400"}}>1.Place Order</p>
              <Tabs>
          <TabList style={{fontSize:"0.8rem",marginTop:"-1rem"}}>
            <Tab>Limit</Tab>
            <Tab>Market</Tab>
            <Tab>
            <Select  style={{fontSize:"0.79rem"}} id="select"  value={sell}
          onChange={(e)=>{
            
            setSell(e.target.value)
          }}>
              <MenuItem value={'Stop-limit'}>Stop-limit</MenuItem>
              <MenuItem value={'Stop-market'}>Stop-market</MenuItem>
          
            </Select>
           </Tab>
            
            
          </TabList>
          <TabPanel>
              <Form>
              <Label>Price</Label>
              <Input></Input>

           

              <Label>Amount</Label>
              <Input></Input>

              <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />

              <Label>Total</Label>
              <Input></Input>

              <Button size="lg" className="bg-dark"  style={{margin:"2rem 0 2rem 0",display:"block",width:"100%"}}  onClick={()=>{
                  setExit(true)
              }}>Next Exits {`>`}</Button>
            </Form>
            </TabPanel>
          </Tabs>

                </>:
            
                <> 
                <p style={{fontSize:"1.1rem",fontWeight:"400"}}>1.Place Order</p>
                <ButtonGroup>
                  <Button  size="lg"  className="bg-success"  onClick={()=>{
                    setActiveE(true)
         
                  }}>
                   Target
                 </Button>
       
                 <Button size="lg" className="bg-dark"  onClick={()=>{
                    setActiveE(false)
         
                  }}>
                  Stop-Loss
                    </Button>
                </ButtonGroup>

                  {activeE ? 
                  
                  <> 
                    <Tabs>
                      <TabList >
                        <Tab>Stop-market</Tab>
                      </TabList>

                      <TabPanel>
                        <Form style={{marginTop:"0.5rem"}}>
                        <Label>Trigger Price</Label>
                        <Input></Input>

                        <Label>Profit</Label>
                        <Input></Input>
                        <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
                           <Label>Quantity</Label>
                        <Input></Input>
                        <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
          <Button size="lg" className="bg-dark" style={{display:"block",width:"100%",marginBottom:"2rem"}}>Add Target </Button>
          {/* <Button size="md" className="bg-primary" style={{display:"block",width:"100%"}} onClick={()=>{
            setExit(false)
          }}>Place Fulltrade </Button> */}
                        </Form>

                      </TabPanel>
                    </Tabs>
                  </>: 
                  <> 
                  
                    <Tabs>
                      <TabList>
                        <Tab>Stop-market</Tab>
                        <Tab>Stop-limit</Tab>
                        <TabPanel>
                        <Form >
                        <Label>Trigger Price</Label>
                        <Input></Input>

                        <Label>Profit</Label>
                        <Input></Input>
                        <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
                           <Label>Quantity</Label>
                        <Input></Input>
                        <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
          <Button size="lg" className="bg-dark" style={{display:"block",width:"100%",marginBottom:"2rem"}}>Add Stop-loss </Button>
                        </Form>
                        </TabPanel>
                        <Form  style={{marginTop:"0.5rem"}}>
                        <Label>Trigger Price</Label>
                        <Input></Input>

                        <Label>Profit</Label>
                        <Input></Input>
                        <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
                           <Label>Quantity</Label>
                        <Input></Input>
                        <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
          <Button size="lg" className="bg-dark" style={{display:"block",width:"100%"}}>Add Stop-loss </Button>
                        </Form>
                        <TabPanel>

                        </TabPanel>

                      </TabList>
                    </Tabs>
                  
                  </>
                  
                  }


                </> }
              
        </TabPanel>
       
        
        </Tabs>
      </Row>
      <Row>
      <h5>Trade Overview</h5>
      <Table style={{display:"block"}}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Price</th>
          <th>Profit</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
      
      </tbody>
    </Table>
      </Row>
      
</div>

  <div className="col" style={{height:"100vh"}}>
  <TradingViewWidget
    symbol={'BTCUSDT'}
    theme={Themes.LIGHT}
    locale="en"
    width="100%"
    height="600vh"
  />
<div style={{height:"100rem"}}>

</div>
  </div>
 
</div>

  </  >
  );
}

export default App;
