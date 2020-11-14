import React from 'react';

import * as C from './styled';

export default function Categories() {
    return (
        <>
            <C.Categories>
                <C.Title>categories</C.Title>
                <C.Subtitle>
                    discover new possibilities to help you today
                </C.Subtitle>

                <C.Rows>
                    <C.Nature>
                        <C.TitleRow>nature</C.TitleRow>
                        <C.SubtitleRow>
                            Lorem ipsum dolor sit amet
                        </C.SubtitleRow>
                    </C.Nature>

                    <C.Daily>
                        <C.TitleRow>daily</C.TitleRow>
                        <C.SubtitleRow>
                            Praesent tincidunt consectetur diam
                        </C.SubtitleRow>
                    </C.Daily>
                </C.Rows>

                <C.Rows>
                    <C.Together>
                        <C.TitleRow>together</C.TitleRow>
                        <C.SubtitleRow>
                            Vivamus non arcu tincidunt, tempus nunc eu,
                            scelerisque ipsum
                        </C.SubtitleRow>
                    </C.Together>
                </C.Rows>

                <C.Rows>
                    <C.Analysis>
                        <C.TitleRow>analysis</C.TitleRow>
                        <C.SubtitleRow>
                            Duis sollicitudin mauris vitae venenatis aliquet
                        </C.SubtitleRow>
                    </C.Analysis>

                    <C.Pictures>
                        <C.TitleRow>pictures</C.TitleRow>
                        <C.SubtitleRow>Quisque eu nisl purus</C.SubtitleRow>
                    </C.Pictures>
                </C.Rows>
            </C.Categories>
        </>
    );
}
