import { Button, Flex, Text } from "@chakra-ui/react";
import { Avatar } from "antd";

export const userColumns = [
   
    {
        title: "Name",
        dataIndex: "photo",
        key: "photo",
        render: (text, record) => (
            <Flex align="center" key={record.id}>
                <Avatar
                    name={record.fullName}
                    key={record.id}
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrv1zN5J8Tn3NKIDIbDQoNmImdP5SlZ8FZDA&usqp=CAU`}
                    size="sm"
                    mr="6"
                />
                <Text key={record.id + 2} p={2} 
                color={"blue"}
                >{record.fullName}</Text>
            </Flex>
        ),
    }
    ,
     {
        title: "Birthday",
        dataIndex: "birthday",
         key: "birthday",
         render: (text, record) => (
            <h1 >
                {text.split("T")[0]}
            </h1>
         ),
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
        render: (text, record) => (
            <span  >
                <a href={`mailto:${text}`} 
                    style={{
                        display: "block",
                        width: "10rem",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        
                    }} 
                >{text}</a>
            </span>

        ),
    },
    {
        title: "Phone",
        dataIndex: "phoneNumber",
        key: "phoneNumber"
    },
    {
        title: "Role",
        dataIndex: "role",
        key: "role",
    },
    {
        title: "Status",
        dataIndex: "isBLocked",
        key: "isBLocked",
        render: (text, record) => {
            return (
                <>
                    { record.isBLocked ? (
                        <>
                            <span
                                style={{
                                    backgroundColor: "Red",
                                    padding: "5px",

                                    color: "white",
                                    borderRadius: "5px",
                                }}
                            >
                                Blocked !!
                            </span>
                        </>
                    ) : (
                        <>
                            <span
                                style={{
                                    backgroundColor: "green",
                                    padding: "5px",

                                    color: "white",
                                    borderRadius: "5px",
                                }}
                            >
                                Not Blocked
                            </span>
                        </>
                    )}
                </>
            )
        }
    },
    {
        title: "Profile",
        dataIndex: "profile",
        key: "profile",
        render: (text, record) => (
            <Button onClick={() => console.log(record)} >
                {"View"}
            </Button>
        ),
    }
];
