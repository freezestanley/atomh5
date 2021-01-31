import React from 'react';
/**
 * 将国际化配置文件中的字符串，转义加粗
 * @param source
 */
export function formatBold(source: string) {
  const ret = source.match(/\[b\][\S\s]+?\[\/b\]/);
  if (ret) {
    const tag = ret[0];
    const pos = ret.index;
    return (
      <>
        {source.substring(0, pos)}
        <strong>{tag.substr(3, tag.length - 7)}</strong>
        {formatBold(source.substr(pos + tag.length))}
      </>
    );
  } else {
    return source;
  }
}
