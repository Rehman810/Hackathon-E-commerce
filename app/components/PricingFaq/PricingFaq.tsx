import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

const PricingFaq = () => {
  const faqItems = [
    {
      question: 'the quick fox jumps over the lazy dog',
      answer:
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
    },
    {
      question: 'the quick fox jumps over the lazy dog',
      answer:
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
    },
    {
      question: 'the quick fox jumps over the lazy dog',
      answer:
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
    },
    {
      question: 'the quick fox jumps over the lazy dog',
      answer:
        'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
    },
    {
        question: 'the quick fox jumps over the lazy dog',
        answer:
          'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
      },
      {
        question: 'the quick fox jumps over the lazy dog',
        answer:
          'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
      },
  ];

  return (
    <Container style={{paddingTop:'30px',paddingBottom:'100px'}}>
      {/* Title */}
      <Box textAlign="center" py={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Pricing FAQs
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics
        </Typography>
      </Box>

      {/* FAQ Section */}
      <Grid container spacing={4} justifyContent="center">
        {faqItems.map((faq, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box display="flex" alignItems="flex-start">
              {/* Arrow Icon */}
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
                mr={1}
                sx={{ fontSize: '1.5rem' }}
              >
                &gt;
              </Typography>

              {/* FAQ Content */}
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="textPrimary"
                >
                  {faq.question}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  lineHeight="1.6"
                >
                  {faq.answer}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PricingFaq;
