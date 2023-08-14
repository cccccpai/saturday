declare namespace Setting {
  interface all {
    /** 底部版权设置 */
    copyright?: copyright;
  }
  /**
   * 底部的版权信息
   */

  interface copyright {
    /**
     * 是否开启底部版权，同时在路由 meta 对象里可以单独设置某个路由是否显示底部版权信息
     * @默认值 `false`
     */
    enable?: boolean;
    /**
     * 网站运行日期
     * @默认值 `''`
     */
    dates?: string;
    /**
     * 公司名称
     * @默认值 `''`
     */
    company?: string;
    /**
     * 网站地址
     * @默认值 `''`
     */
    website?: string;
    /**
     * 网站备案号
     * @默认值 `''`
     */
    beian?: string;
  }
}
