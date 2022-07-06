import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

const Candidate = ({ candidate }) => {
    const dateFormat = '%MMM/%DD/%YYYY';
    const experiences = candidate.experience.map((experience, i) => {
        const nextExperience = i > 0 && candidate.experience[i - 1];
        const gap = nextExperience ? dayjs(nextExperience.start_date, dateFormat).diff(dayjs(experience.end_date, dateFormat), 'day') : 0;
        return {
            ...experience,
            gap,
        }
    })

    return (
        <Box component={Card} mb={1.5}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {candidate.contact_info.name.formatted_name}
                </Typography>

                {experiences.map((experience, i) => (
                    <Box key={`experience-${i}`}>
                        <Typography variant="body1" component="div">
                            Gap between jobs: {dayjs.duration(experience.gap, 'day').humanize()}
                        </Typography>
                        <Typography variant="body1" component="div">
                            Worked as {experience.title} from {experience.start_date} to {experience.end_date}
                        </Typography>
                    </Box>
                ))}
            </CardContent>
        </Box>
    );
};

export default Candidate;
