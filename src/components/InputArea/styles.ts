import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    div{ 
        width: 400px;
        background-color: #FFF;
        border: 1px solid red;
        box-shadow: 0px 0px 5px red;
        padding: 5px 0;
        margin-bottom: 10px;
        color: red;
    }

    form{
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        label{
            width: 100%;
            display: flex; 
            align-items: center;           
            span{
                flex: 1; 
                margin-right:10px;
            }
            select, input{ 
                flex: 2;                
                padding:5px;
                border-radius: 5px;
                border: 1px solid #ccc;
            }            
        }
        input[type|=submit]{            
            padding:5px 10px;
            border-radius: 5px;
            border-color: blue;
            color: blue;
            background-color:#fff;
            font-weight: bold;

            :hover{ 
                border-color: blue;
                color: #fff;
                background-color:blue;
            }
        }
    }
`;
