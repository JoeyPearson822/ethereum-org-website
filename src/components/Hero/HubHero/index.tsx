import * as React from "react"
import { StaticImageData } from "next/image"
import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react"

import { Image } from "@/components/Image"

import { CallToAction, CallToActionProps } from "../CallToAction"

export type CommonHeroProps = {
  heroImg: StaticImageData
  header: string
  title: string
  description: string
  buttons?: [CallToActionProps, CallToActionProps?]
}

const HubHero = (props: CommonHeroProps) => {
  const { heroImg, title, header, description, buttons } = props

  if (buttons && buttons.length > 2) {
    throw Error(
      "Can not have more than two call-to-action buttons in this hero component."
    )
  }

  return (
    <Box position="relative">
      <Image
        src={heroImg}
        alt=""
        objectFit="cover"
        h={{
          base: "192px",
          md: "256px",
          lg: "320px",
          xl: "576px",
          "2xl": "672px",
        }}
      />
      <Stack
        spacing={{ base: "3", md: "4" }}
        p={{ base: "4", lg: "8" }}
        textAlign={{ base: "center", xl: "start" }}
        borderRadius={{ xl: "base" }}
        bg={{ xl: "hubHeroContentBg" }}
        position={{ xl: "absolute" }}
        insetStart={{ xl: "8" }}
        maxW={{ xl: "sm" }}
        top={{ xl: "50%" }}
        transform={{ xl: "translateY(-50%)" }}
        backdropFilter={{ xl: "auto" }}
        backdropBlur={{ xl: "base" }}
        wordBreak="break-word"
      >
        <Heading
          as="h1"
          size="sm"
          color="body.medium"
          fontWeight="normal"
          textTransform="uppercase"
        >
          {title}
        </Heading>
        <Stack
          alignSelf="center"
          spacing={{ base: "2", md: "1" }}
          maxW="container.md"
        >
          <Heading size="2xl">{header}</Heading>
          <Text size="lg">{description}</Text>
        </Stack>
        <HStack justify={{ md: "center", xl: "start" }} spacing="4">
          {buttons
            ? buttons.map((button, idx) => {
                if (!button) return
                return <CallToAction key={idx} {...button} index={idx} />
              })
            : null}
        </HStack>
      </Stack>
    </Box>
  )
}

export default HubHero
