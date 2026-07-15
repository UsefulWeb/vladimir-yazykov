import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { Section } from '@shared/ui'
import type { FaqItem } from '../model/mentoringFaq'

interface FaqProps {
  title?: string
  items: FaqItem[]
}

export function Faq({ title = 'FAQ', items }: FaqProps) {
  return (
    <Section title={title}>
      {items.map((item, i) => (
        <Accordion
          key={item.question}
          defaultExpanded={i === 0}
          disableGutters
          elevation={0}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Section>
  )
}
