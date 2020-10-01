import React from 'react'
import { useRepo } from '../../data/hooks'
import Holder from './holder'

import {
    Box,
    SimpleGrid
} from '@chakra-ui/core'

const Projects = props => {

    const repos = useRepo()
    console.log(repos)

    return <>
        <Box my={22} mx={[28,6]}>
            <SimpleGrid columns={[1, 1, 2]} spacing={4} >
                {repos.map(el => {
                    console.log(el.language)
                    return <>
                        <Box style={{width: '200px'}}>
                            <Holder
                                repo_name={el.name}
                                language={el.language}
                                issues={el.issueCount}
                                stars={el.stars}
                                description={el.description}
                                issueUrl={el.issueUrl}
                            />
                        </Box>
                    </>
                })}
            </SimpleGrid>
        </Box>
    </>
}

export default Projects