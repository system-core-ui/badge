import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../Badge/Badge';
import { ThemeProvider } from '@thanh-libs/theme';

// ─── Helpers ──────────────────────────────────────────

const Box = () => (
  <div style={{ width: 40, height: 40, backgroundColor: '#e0e0e0', borderRadius: 4 }} />
);

const AvatarBox = () => (
  <div style={{ width: 40, height: 40, backgroundColor: '#8e24aa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 16, fontWeight: 600 }}>
    T
  </div>
);

// ─── Basic ───────────────────────────────────────────────

const BasicStory = () => (
  <Badge count={5}>
    <Box />
  </Badge>
);

// ─── Max Value ───────────────────────────────────────────

const MaxValueStory = () => (
  <div style={{ display: 'flex', gap: 32 }}>
    <Badge count={5} max={99}><Box /></Badge>
    <Badge count={99} max={99}><Box /></Badge>
    <Badge count={100} max={99}><Box /></Badge>
    <Badge count={1000} max={99}><Box /></Badge>
    <Badge count={1000} max={999}><Box /></Badge>
  </div>
);

// ─── Dot ─────────────────────────────────────────────────

const DotStory = () => (
  <div style={{ display: 'flex', gap: 32 }}>
    <Badge dot>
      <Box />
    </Badge>
    <Badge dot color="error">
      <AvatarBox />
    </Badge>
    <Badge dot color="success">
      <AvatarBox />
    </Badge>
  </div>
);

// ─── Colors ──────────────────────────────────────────────

const ColorsStory = () => (
  <div style={{ display: 'flex', gap: 24 }}>
    <Badge count={5} color="primary"><Box /></Badge>
    <Badge count={5} color="secondary"><Box /></Badge>
    <Badge count={5} color="error"><Box /></Badge>
    <Badge count={5} color="warning"><Box /></Badge>
    <Badge count={5} color="info"><Box /></Badge>
    <Badge count={5} color="success"><Box /></Badge>
  </div>
);

// ─── Placements ──────────────────────────────────────────

const PlacementsStory = () => (
  <div style={{ display: 'flex', gap: 40, padding: 20 }}>
    <Badge count={5} placement="top-left"><Box /></Badge>
    <Badge count={5} placement="top-right"><Box /></Badge>
    <Badge count={5} placement="bottom-left"><Box /></Badge>
    <Badge count={5} placement="bottom-right"><Box /></Badge>
  </div>
);

// ─── Shape ───────────────────────────────────────────────

const ShapeStory = () => (
  <div style={{ display: 'flex', gap: 40, padding: 20 }}>
    <div style={{ textAlign: 'center' }}>
      <Badge count={5} shape="pill"><Box /></Badge>
      <div style={{ marginTop: 12, fontSize: 12, color: '#888' }}>pill</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Badge count={5} shape="circle"><Box /></Badge>
      <div style={{ marginTop: 12, fontSize: 12, color: '#888' }}>circle</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Badge count={5} shape="square"><Box /></Badge>
      <div style={{ marginTop: 12, fontSize: 12, color: '#888' }}>square</div>
    </div>
  </div>
);

// ─── ShowZero ────────────────────────────────────────────

const ShowZeroStory = () => (
  <div style={{ display: 'flex', gap: 40, padding: 20 }}>
    <div style={{ textAlign: 'center' }}>
      <Badge count={0}><Box /></Badge>
      <div style={{ marginTop: 12, fontSize: 12, color: '#888' }}>count=0 (hidden)</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Badge count={0} showZero><Box /></Badge>
      <div style={{ marginTop: 12, fontSize: 12, color: '#888' }}>count=0 showZero</div>
    </div>
  </div>
);

// ─── Standalone (no children) ────────────────────────────

const StandaloneStory = () => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
    <Badge count={5} />
    <Badge count={42} color="error" />
    <Badge count={999} max={99} color="warning" />
    <Badge dot color="success" />
  </div>
);

// ─── Custom Offset ───────────────────────────────────────

const CustomOffsetStory = () => (
  <div style={{ display: 'flex', gap: 40, padding: 20 }}>
    <div style={{ textAlign: 'center' }}>
      <Badge count={5}><Box /></Badge>
      <div style={{ marginTop: 12, fontSize: 12, color: '#888' }}>default</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Badge count={5} offset={[0, 0]}><Box /></Badge>
      <div style={{ marginTop: 12, fontSize: 12, color: '#888' }}>offset=[0,0]</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Badge count={5} offset={[10, 10]}><Box /></Badge>
      <div style={{ marginTop: 12, fontSize: 12, color: '#888' }}>offset=[10,10]</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Badge count={5} offset={[-5, -5]}><Box /></Badge>
      <div style={{ marginTop: 12, fontSize: 12, color: '#888' }}>offset=[-5,-5]</div>
    </div>
  </div>
);

// ─── Playground ──────────────────────────────────────────

const PlaygroundStory = (args: any) => (
  <Badge {...args}>
    <Box />
  </Badge>
);

// ─── Meta & Exports ──────────────────────────────────────

const meta: Meta = {
  title: 'Badge/Badge',
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: 40 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const Basic: StoryObj = { name: 'Basic', render: () => <BasicStory /> };
export const MaxValue: StoryObj = { name: 'Max Value', render: () => <MaxValueStory /> };
export const Dot: StoryObj = { name: 'Dot', render: () => <DotStory /> };
export const Colors: StoryObj = { name: 'Colors', render: () => <ColorsStory /> };
export const Placements: StoryObj = { name: 'Placements', render: () => <PlacementsStory /> };
export const Shape: StoryObj = { name: 'Shape', render: () => <ShapeStory /> };
export const ShowZero: StoryObj = { name: 'Show Zero', render: () => <ShowZeroStory /> };
export const Standalone: StoryObj = { name: 'Standalone', render: () => <StandaloneStory /> };
export const CustomOffset: StoryObj = { name: 'Custom Offset', render: () => <CustomOffsetStory /> };

export const Playground: StoryObj = {
  name: 'Playground',
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'] },
    placement: { control: 'select', options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'] },
    shape: { control: 'select', options: ['pill', 'circle', 'square'] },
    count: { control: 'number' },
    max: { control: 'number' },
    dot: { control: 'boolean' },
    showZero: { control: 'boolean' },
  },
  args: {
    color: 'primary',
    placement: 'top-right',
    shape: 'pill',
    count: 5,
    max: 99,
    dot: false,
    showZero: false,
  },
  render: (args: any) => <PlaygroundStory {...args} />,
};
