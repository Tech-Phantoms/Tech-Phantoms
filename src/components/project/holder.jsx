import React from 'react'
import styles from '../teamCard/style.module.css';
import {
    Box,
    Text,
    Badge,
    Icon,
    SimpleGrid
} from '@chakra-ui/core'
import { month } from './month.const'

const Holder = props => {

    let langColor = {
        "JavaScript": 'yellow',
        "TypeScript": 'cyan',
        "Python": 'blue',
        "C++": "pink"
    }

    let getLangColor = language => {
        return langColor[language]
    }
    const date = new Date(props.created)

    return <>

        <Box px={4}>{month(date.getMonth())} {date.getUTCDate()}, {date.getUTCFullYear()}</Box>
        <a target="blank" href={props.issueUrl}>
            <Box
                px={2}
                py={2}
                style={{
                    border: '1px #E2E8F0 solid',
                    borderRadius: '6px',
                    marginRight : 'auto',
                    marginLeft: 'auto',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    marginTop: '10px',
                    boxShadow: '0px 0px 3px 3px #E2E8F0',
                }}
                className={styles.container}
            >

                <Box px={4} py={1} >
                    <Text fontSize="xl" textAlign='center' className={styles.name} >{props.repo_name}</Text>
                </Box>

                <Box px={4} >
                    <Text color="grey" fontSize="xs" textAlign='center' >{props.description}</Text>
                </Box>

                <Box px={4} py={5}>
                    <SimpleGrid alignItems="left" columns={3} spacing={2}>
                        <Box>
                            <Badge variantColor={getLangColor(props.language)} >{props.language}</Badge>
                        </Box>

                        <Box>
                            <Text><Icon color="red.400" name="warning" /> <span style={{ fontSize: '12px', padding: '1px' }} >{props.issues}</span></Text>
                        </Box>

                        <Box>
                            <Text><Icon color="green.400" name="star" /> <span style={{ fontSize: '12px', padding: '1px' }} >{props.stars}</span></Text>
                        </Box>

                    </SimpleGrid>
                </Box>
             </Box>
           </a>
       
    </>
}


export default Holder
