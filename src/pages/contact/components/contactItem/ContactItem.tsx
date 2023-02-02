import React from 'react'
import { Box, Typography, Link, Breadcrumbs, LinkProps } from '@mui/material'
import { ContactItemTypes } from './ContactItem.styles'
import { ContactItemPropTypes } from './ContactItem.types'

export const ContactItemComponent: React.FC<ContactItemPropTypes> = ({
  item
}) => {
  const LINK_DEFAULT_PROPS: LinkProps = {
    variant: 'body2',
    underline: 'hover',
    color: 'black',
    target: '_blank'
  }

  return (
    <ContactItemTypes>
      <Typography variant='subtitle1' fontWeight='bold'>
        {item.title}
      </Typography>
      <Box display='flex' flexDirection='column'>
        {item.description.link ? (
          <Link {...LINK_DEFAULT_PROPS} href={item.description.link}>
            {item.description.formatted}
          </Link>
        ) : (
          <Typography variant='body2'>{item.description.formatted}</Typography>
        )}
        <Breadcrumbs aria-label='breadcrumb'>
          {item.numbers?.map(({ formatted, link }) => (
            <Link {...LINK_DEFAULT_PROPS} href={link}>
              {formatted}
            </Link>
          ))}
        </Breadcrumbs>
      </Box>
    </ContactItemTypes>
  )
}

export * from './ContactItem.types'
