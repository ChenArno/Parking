import * as React from 'react'
import { Comment } from '@/components/index.ts'
import Player from 'griffith'
import playProps from './props.ts'

class PlayVideo extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <Comment title="视频播放">
        <Player {...playProps} />
      </Comment>
    )
  }
}

export default PlayVideo
