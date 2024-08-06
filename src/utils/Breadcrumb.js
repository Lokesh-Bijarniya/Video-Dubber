import { Breadcrumbs, Anchor } from '@mantine/core';


// const theme = createTheme({
//     fontFamily: 'Verdana, sans-serif',
//     fontFamilyMonospace: 'Monaco, Courier, monospace',
//     headings: { fontFamily: 'Greycliff CF, sans-serif' },
//   });

const items = [
  { title: 'Home', href: '#' },
  { title: 'Product', href: '#' },
  { title: 'VideoDubber - Fast Video Translator', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export default function Bar() {
  return (
    <>
      <Breadcrumbs separator=">" separatorMargin="md" mt="xs" style={{
        color: '#828282',
        fontWeight: 200,
        display: 'flex',
        gap:6,
        width: '100%',
      }}>
        {items}
      </Breadcrumbs>
    </>
  );
}