import { Button } from '~ui/Button/Button';
import { Flex } from '~ui/Flex/Flex';
import { Spinner } from '~ui/Spinner/Spinner';

export default function Home() {
  return (
    <main>
      <Flex flexDirection="column" alignItems="flex-start">
        <Button size="medium">medium</Button>

        <Button size="small">small</Button>

        <Button size="large">large</Button>

        <Button isLoading variant="default">
          default
        </Button>

        <Button variant="primary">primary</Button>

        <Button isLoading variant="ghost">
          ghost
        </Button>

        <Button isDisabled>isDisabled</Button>

        <Spinner size="medium" />
        <Spinner size="small" />
        <Spinner size="large" />
      </Flex>
    </main>
  );
}
