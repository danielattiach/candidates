import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Candidate from './Candidate';

const Candidates = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const fetchCandidates = async () => {
            const response = await fetch('/api/candidates');
            const data = await response.json();
            setCandidates(data);
        }
        fetchCandidates();
    }, [])

    return (
        <Box>
            {candidates.map((candidate, i) => (
                <Candidate key={`candidate-${i}`} candidate={candidate} />
            ))}
        </Box>
    )
}

export default Candidates;
