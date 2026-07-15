import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {
  contactUrl,
  isNavGroup,
  type NavGroup,
  type NavMenuItem,
  paths,
  useNavMenu,
} from '@shared/config'
import { LanguageSwitcher } from '@shared/ui'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

function isPathActive(pathname: string, path: string) {
  return (
    pathname === path ||
    (path !== paths.home && pathname.startsWith(`${path}/`))
  )
}

function isGroupActive(pathname: string, group: NavGroup) {
  if (group.path && isPathActive(pathname, group.path)) return true
  return group.children.some((child) => isPathActive(pathname, child.path))
}

function NavDropdown({
  group,
  pathname,
  onNavigate,
}: {
  group: NavGroup
  pathname: string
  onNavigate?: () => void
}) {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null)
  const open = Boolean(anchor)
  const active = isGroupActive(pathname, group)

  return (
    <>
      <Button
        color="inherit"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={(e) => setAnchor(e.currentTarget)}
        sx={{ fontWeight: active ? 700 : 400 }}
        aria-controls={open ? `${group.label}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {group.label}
      </Button>
      <Menu
        id={`${group.label}-menu`}
        anchorEl={anchor}
        open={open}
        onClose={() => setAnchor(null)}
        slotProps={{ list: { sx: { minWidth: 180 } } }}
      >
        {group.path ? (
          <MenuItem
            component={Link}
            to={group.path}
            selected={isPathActive(pathname, group.path)}
            onClick={() => {
              setAnchor(null)
              onNavigate?.()
            }}
          >
            {group.label}
          </MenuItem>
        ) : null}
        {group.children.map(({ label, path }) => (
          <MenuItem
            key={path}
            component={Link}
            to={path}
            selected={isPathActive(pathname, path)}
            onClick={() => {
              setAnchor(null)
              onNavigate?.()
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

function DesktopNavItem({
  item,
  pathname,
}: {
  item: NavMenuItem
  pathname: string
}) {
  if (isNavGroup(item)) {
    return <NavDropdown group={item} pathname={pathname} />
  }

  return (
    <Button
      component={Link}
      to={item.path}
      color="inherit"
      sx={{ fontWeight: isPathActive(pathname, item.path) ? 700 : 400 }}
    >
      {item.label}
    </Button>
  )
}

function MobileNavItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavMenuItem
  pathname: string
  onNavigate: () => void
}) {
  if (isNavGroup(item)) {
    return (
      <>
        {item.path ? (
          <ListItemButton
            component={Link}
            to={item.path}
            selected={isPathActive(pathname, item.path)}
            onClick={onNavigate}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ) : (
          <ListSubheader disableSticky sx={{ lineHeight: 2.5 }}>
            {item.label}
          </ListSubheader>
        )}
        {item.children.map(({ label, path }) => (
          <ListItemButton
            key={path}
            component={Link}
            to={path}
            selected={isPathActive(pathname, path)}
            onClick={onNavigate}
            sx={{ pl: 4 }}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </>
    )
  }

  return (
    <ListItemButton
      component={Link}
      to={item.path}
      selected={isPathActive(pathname, item.path)}
      onClick={onNavigate}
    >
      <ListItemText primary={item.label} />
    </ListItemButton>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const closeDrawer = () => setOpen(false)
  const { t } = useTranslation()
  const navMenu = useNavMenu()

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={0}>
        <Toolbar sx={{ gap: 2 }}>
          <Typography
            variant="h6"
            component={Link}
            to={paths.home}
            sx={{
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 800,
            }}
          >
            {t('common.siteName')}
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              alignItems: 'center',
            }}
          >
            {navMenu.map((item) => (
              <DesktopNavItem
                key={isNavGroup(item) ? item.label : item.path}
                item={item}
                pathname={location.pathname}
              />
            ))}
            <Button
              component="a"
              href={contactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="inherit"
              sx={{ ml: 1 }}
            >
              {t('common.discuss')}
            </Button>
            <LanguageSwitcher color="inherit" />
          </Box>
          <IconButton
            color="inherit"
            sx={{ display: { md: 'none' } }}
            onClick={() => setOpen(true)}
            aria-label={t('common.menu')}
          >
            ☰
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <Box
          sx={{
            width: 260,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: 1,
            pl: 2,
            pr: 0.5,
          }}
        >
          <LanguageSwitcher color="primary" />
          <IconButton onClick={closeDrawer} aria-label={t('common.closeMenu')}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ width: 260, pt: 1, pb: 2 }}>
          {navMenu.map((item) => (
            <MobileNavItem
              key={isNavGroup(item) ? item.label : item.path}
              item={item}
              pathname={location.pathname}
              onNavigate={closeDrawer}
            />
          ))}
          <ListItemButton
            component="a"
            href={contactUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDrawer}
          >
            <ListItemText primary={t('common.discuss')} />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  )
}
